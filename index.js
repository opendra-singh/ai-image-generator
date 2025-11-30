import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import OpenAI from 'openai';
import { InferenceClient } from '@huggingface/inference'

dotenv.config();
const app = express()
app.use(cors())
app.use(express.json())

app.get( '/', (req, res) => {
    res.send('done => created server')
})

async function generateImage({prompt, size, model}) {

    if( model == 'dall-e-3' ) {
        try {
            const openai = new OpenAI({
                apiKey: process.env.OPEN_AI_KEY,
            });
            const response = await openai.images.generate({
                model: model,
                prompt: prompt,
                n: 1,
                size: size,
        });
            return response.data[0].url;
        } catch (error) {
            console.error("Error generating image:", error);
            throw error;
        }
    } else if( model == 'stable_diffudion_2' ) {

        const HF_API_KEY = process.env.HF_AI_KEY;
        const hf = new InferenceClient(HF_API_KEY);

        const response = await hf.textToImage({
            model: 'stabilityai/stable-diffusion-xl-base-1.0',
            inputs: prompt,
            parameters: {
                negative_prompt: 'blurry, bad quality, distorted',
            }
        });

        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const base64Image = buffer.toString('base64');
        const imageUrl = `data:image/png;base64,${base64Image}`;
        return imageUrl;
    } else {
        console.error("Model not found");
    }
}

app.post( '/generate_image', async (req, res) => {

    try{
        const text = `Create one image with the following description, image Type should be: ${req.body.imageType} , from image category : ${req.body.image_category}, following in the Mode of: ${req.body.selected_mode}`;

        const data = {
            'prompt' : text,
            'size' : req.body.imageSize,
            'model' : req.body.selected_model
        }

        const imageData = await generateImage(data);
        res.status(200).json({success:'success', data: imageData});
    } catch( error ){

        console.error("Error generating image:", error);
        throw error;
    }
})

app.listen(process.env.PORT)