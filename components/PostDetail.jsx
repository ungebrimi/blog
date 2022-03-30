import React from 'react'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer';

const PostDetail = ({ post }) => {
    console.log(post.content.raw.children)  

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
          <div className="relative overflow-hidden shadow-md mb-6">
              <img src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
          </div>
          <div className="px-4 lg:px-0">
              <div className="flex items-center mb-8 w-full">
                  <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
                      <img
                        alt={post.author.name}
                        height="30px"
                        width="30px"
                        className="align-middle rounded-full"
                        src={post.author.photo.url}
                      />
                      <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
                  </div>
                  <div className="font-medium text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                  </div>
              </div>
              <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
              <RichText 
              content={post.content.raw.children} 
              renderers={
                {
                  h1: ({children}) => <h1 className="py-3 text-2xl font-semibold">{children}</h1>,
                  h2: ({children}) => <h2 className="py-3 text-2xl font-semibold">{children}</h2>,
                  h3: ({children}) => <h3 className="py-3 text-2xl font-semibold">{children}</h3>,
                  p: ({children}) => <p className="pb-1">{children}</p>,
                  code: ({children}) => <code className="bg-gray-200 px-2 py-1 text-sm">{children}</code>,
                  code_block: ({children}) => <pre className="bg-gray-200 width-100 px-4 my-4 whitespace-pre-wrap py-4 text-sm">{children}</pre>,
                  class: ({children}) => <p className="py-5">{children}</p>,
                  a: ({children}) => <a className="text-blue-500">{children}</a>,
                  ul: ({children}) => <ul className="list-disc py-4">{children}</ul>,
                  li: ({children}) => <li className="py-2 ml-4">{children}</li>,
                }
              }
              />
          </div>
      </div>
    </>
  )
}

export default PostDetail