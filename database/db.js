import mongoose from "mongoose"


const dbConnection = async () => {
    const MONGODB_URI = 'mongodb://localhost:27017/file-sharing'
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
        console.log('database conneted')
    } catch (error) {
        console.error(error.message)
    }
}

export default dbConnection;