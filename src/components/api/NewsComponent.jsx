
export default function NewsComponent(props) {
  const {name, url, title, urlToImage,publishedAt,  author, description} = props.news;
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            title="Woman holding a mug"
          ></div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                <img src={urlToImage} alt="" />
                {/* {quary.source.name} */}
                {name}
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                {/* {quary.title} */}
                {title}
              </div>
              <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                // src={quary.urlToImage}
                src={urlToImage}
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">
                  {/* {quary.publishedAt} */}
                  {publishedAt}
                </p>
                <p className="text-gray-600">
                  {/* {quary.author} */}
                  {author}
                </p>
                {/* <a href={quary.url}>{quary.url}</a> */}
                <a href={url}>{url}</a>
              </div>
            </div>
          </div>
        </div>
  )
}
