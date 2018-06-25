export async function POST(ip,dataToSend){
    let response = await fetch(ip, 
    {
      method: "POST",
      headers: 
      {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToSend)
    })
    let data = await response.json()
    return data
}
export async function GET(ip, id){
  try{
    let response = await fetch(ip+id)
    let data = await response.json()
    return data
  }
  catch(err){
    console.log(err)
  }
}