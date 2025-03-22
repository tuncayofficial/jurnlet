interface CardElements {
    title : string,
    content : string,
    button : string
}


export default function Card({ title, content, button } : CardElements){
    return(
        <div className="m-16 max-w-sm w-full bg-gray-800 rounded-2xl shadow-black shadow-sm overflow-hidden transform transition duration-300 hover:scale-105">
      <img 
        className="w-full h-56 object-cover" 
        src="https://picsum.photos/500/300?random=1" 
        alt="Card Image" 
      />
      <div className="p-10">
        <h2 className="text-2xl font-semibold text-white pb-2">{title}</h2>
        <p className="text-gray-400 mt-2">
          {content}
        </p>
        <button className="mt-6 w-full bg-indigo-500 text-white py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-indigo-700">
            {button}
        </button>
      </div>
    </div>
    )
}