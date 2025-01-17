import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from 'fastify'
import {CreateNutritionController} from './controllers/CreateNutritionController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply ) => {

        let responseText = "```json\n{\n  \"nome\": \"Matheus\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 28,\n  \"altura\": 1.90,\n  \"peso\": 70,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"7:00\",\n      \"nome\": \"Cafe da manha\",\n      \"alimentos\": [\n        \"3 ovos inteiros\",\n        \"2 fatias de pao integral\",\n        \"1 colher de sopa de pasta de amendoim\",\n        \"1 banana media\",\n        \"200ml de leite desnatado\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da manha\",\n        \"alimentos\": [\n        \"1 copo de iogurte grego\",\n        \"1/2 xicara de frutas vermelhas\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"1 xicara de arroz integral\",\n        \"1 xicara de brócolis cozido no vapor\",\n        \"1 colher de sopa de azeite de oliva\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"1 scoop de whey protein\",\n        \"1 fruta (maca, pera ou laranja)\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe grelhado (salmão, tilápia ou merluza)\",\n        \"1 xicara de batata doce cozida\",\n        \"1 xicara de salada verde\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Ceia (opcional)\",\n      \"alimentos\": [\n        \"1 copo de leite desnatado com 1 colher de sopa de aveia\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey protein\",\n    \"Creatina\",\n    \"BCAA\"\n  ]\n}\n```"

        try {

            let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g,'').trim();
            let jsonObject = JSON.parse(jsonString)

            return reply.send({ data: jsonObject})
        }
        catch(err){
            console.log(err)

        }

        reply.send({ok:true})
    })

    fastify.post("/create", async(request: FastifyRequest, reply: FastifyReply ) => {
        return new CreateNutritionController().handle(request, reply)
    })



}