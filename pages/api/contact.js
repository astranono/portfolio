import axios from "axios";

export default async function handler(req, res){
    const name = req.body.name
    const email = req.body.email

    const data = JSON.stringify({
        fields : {
            Name: name,
            Email: email,
        },
    })

    const config = {
        headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
        },
    }
    const airTable = await axios.post('https://api.airtable.com/v0/app6OAqqVgKgWBY2b/Table%201', data, config)

    res.status(200).json({ status: 'sucess'})
}

