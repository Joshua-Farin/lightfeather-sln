export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
   
    if (!body.first || !body.last || !body.supervisor) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'First name, last name, or supervisor not found' })
    }
  
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.first}, ${body.last}, ${body.email}, ${body.phone}, ${body.supervisor}` })
    console.log({ data: `${body.first}, ${body.last}, ${body.email}, ${body.phone}, ${body.supervisor}` })
  
  }
  