import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async ( ) => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('MongoDB is already connected')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParset: true,
            useUnifiedTopology: true
        })

        isConnected = true

        console.log('MongoDB coonected')
    } catch (error) {
        console.log(error)
    }
}