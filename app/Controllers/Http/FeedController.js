'use strict'
const Feed = use('App/Models/Feed')

class FeedController {
    async index ({response}) {
        try {
            let feeds = await Feed.all()
            return response.json(feeds)
        } catch (error) {
            return response.status(400).json({
                    "message":"failed"
            })

        }
    }

    async show ({params, response}) {
        const feed = await Feed.find(params.id)
        if (!feed) {
            return response.status(404).json({data: 'Resource not found'})
            }
        return response.json(feed)
    }

    async store ({request, response, auth}) {
        try {
        const getUser = await auth.getUser()
        const feedData = request.all(['media','content'])
        feedData.user_id = getUser.id
        const feed = await Feed.create(feedData)
            return response.status(201).json(feed)
        } catch (error) {
            return response.status(400).json({
                "message":"Failed"
            })
        }

    }

    async update ({params, request, response}) {
        try{
            const feedInfo = request.only([ 'media', 'content'])
            const feed = await Feed.find(params.id)
             if (!feed) {
                return response.status(404).json({data: 'Resource not found'})
            }
                feed.media = feedInfo.media
                feed.content = feedInfo.content
                await feed.save()
                return response.status(200).json(feed)
      
          }catch(e){
            response.status(400).send({"message" : "error"})
            console.log(e)
          }
    }

    async delete ({params, response}) {
        try {
            const feed = await Feed.find(params.id)
            if (!feed) {
            return response.status(404).json({data: 'Resource not found'})
            }
            await feed.delete()
            return response.status(204).json({'messages': 'data deleted'})
        } catch (error) {
            response.status(400).send({"message" : "error"})
            
        }
    }
}

module.exports = FeedController
