const getTime = (req, res) => {
 const date = new Date()
 res.json({ date: date.toUTCString() })
}

export default getTime
