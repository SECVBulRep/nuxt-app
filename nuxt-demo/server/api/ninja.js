export default defineEventHandler(async (event)=>{

 const {name} = getQuery(event);





 const {data} = await $fetch('https://api.currencyapi.com/v3/currencies?apikey=cur_live_kTsaWdInJGnCM27mwTuwRSD4FacWunteGUtlDKnu')


    return {
        message:`Hello ${name}`,
        data : data
       
    }
})