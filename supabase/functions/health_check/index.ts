// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.131.0/http/server.ts"
import { supabaseClient } from "../../utils/client.ts"

console.log("Health check!")

serve(async (req) => {
  const statusData: any[] = []
  const { data } = await supabaseClient.from('urls').select('*')
  
  if (!data) return new Response('No url found')
  
  for (let i = 0; i < data.length; i++) {
    const url = data[i]
    let status = ''
    for (let j = 0; j < 4; j++) {
      const statusCode = await fetch(url.url).then((res) => res.status)
      if ([200, 202, 301, 302, 307].includes(statusCode)) {
        status = 'success'
        break
      } else {
        status = 'fail'
      }
    }

    statusData.push({
      url_id: url.id,
      status,
    })
  }

  if (statusData.length > 0) { 
    const { data: log_data } = await supabaseClient.from('logs').insert(statusData)
    return new Response(JSON.stringify(log_data), { headers: { "Content-Type": "application/json" } })
  }

  return new Response('No log data')
})

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24ifQ.625_WdcF3KHqz5amU0x2X5WWHP-OEs_4qj0ssLNHzTs' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
