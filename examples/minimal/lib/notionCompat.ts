import { Client } from '@notionhq/client'
import { NotionCompatAPI } from 'notion-compat'

const nativeClient = new Client({
  auth: process.env.NOTION_API_TOKEN
})

const compat = new NotionCompatAPI(nativeClient)
export default compat
