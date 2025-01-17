import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from 'fastify'
import {CreateNutritionController} from './controllers/CreateNutritionController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply ) => {
        
        let responseText = {
            "data": "```json\n{\n  \"nome\": \"Matheus\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 28,\n  \"altura\": 1.90,\n  \"peso\": 70,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"7:00\",\n      \"nome\": \"Cafe da manha\",\n      \"alimentos\": [\n        \"Aveia (50g)\",\n        \"Leite desnatado (200ml)\",\n        \"Banana (1 unidade)\",\n        \"Nozes (10g)\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da manha\",\n      \"alimentos\": [\n        \"Proteina de soro do leite (whey protein) (30g)\",\n        \"Frutas (maçã ou pera)\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"Arroz integral (1 concha)\",\n        \"Frango grelhado (150g)\",\n        \"Salada verde (alface, tomate, pepino)\",\n        \"Feijao (1 concha)\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"Batata doce (100g)\",\n        \"Queijo cottage (100g)\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"Carne magra (bife ou peixe) (150g)\",\n        \"Batata assada (1 unidade media)\",\n        \"Brócolis (1 concha)\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche antes de dormir\",\n      \"alimentos\": [\n        \"Caseina (30g)\",\n        \"Leite desnatado (100ml)\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey protein\",\n    \"Creatina\",\n    \"BCAA\"\n  ]\n}\n```\n"
          }

        reply.send({ok: true});
    })

    fastify.post("/create", async(request: FastifyRequest, reply: FastifyReply ) => {
        return new CreateNutritionController().handle(request, reply)
    })



}