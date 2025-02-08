
import { createClient } from "next-sanity";



//Fatching Data from Sanity //
const client = createClient({
    projectId : 'imp0o3af',
    dataset : 'production',
    useCdn : true,
    apiVersion : "2025-01-15"
})

export async function sanityFetch({query, params = {}}: {query : string, params?:{[key:string]:unknown}}){
  try{
    const data = await client.fetch(query,params)
    return data
  }
  catch (error){
    console.error('Error fatching data',error)
    throw error
  }
}

