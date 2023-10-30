import React from 'react'

export const AddNewReview = () => {
  return (
    <form >
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text"   className="block py-2.5 px-0 w-2/4 text-sm text-gray-900 bg-gray-50
                     border border-gray-300 border-gray-300 appearance-none "  placeholder="Enter Author Name " 
                     required />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text"   className="block py-2.5 px-0 w-2/4 text-sm text-gray-900 bg-gray-50
                     border border-gray-300 border-gray-300 appearance-none "  placeholder="Enter Resturant Name"
                     required />
                </div>  
            </div>

            <textarea id="message"   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50
            rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-8"
            ></textarea>

            <button  className="text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Create Review</button>
        </form>
  )
}
