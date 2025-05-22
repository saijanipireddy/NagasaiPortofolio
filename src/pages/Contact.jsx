

function Contact() {
    

    const handleSubmit = () => {
      alert("Message Sent Succesfully!")
    }
   

  return (
    <div className="flex flex-col px-6 py-4 text-left whitespace-pre-line gap-5 lg:px-20    ">
      <h1 className=" text-left text-2xl font-bold mb-5">Contact Form</h1>
        <form onSubmit={handleSubmit} className=" gap-y-4 flex flex-col justify-center">
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                <label htmlFor="name" className="block text-sm font-medium ">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className={`mt-1 block w-full p-2 border rounded-md bg-inherit`}
                    required
                />
                
                </div>
                <div>
                <label htmlFor="email" className="block text-sm font-medium ">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={`mt-1 block w-full p-2 border rounded-md bg-inherit`}
                    required
                />
                
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium ">Message</label>
                <textarea
                    id="message"
                    name="message"
                    className={`mt-1 block w-full p-2 border rounded-md h-28 resize-none bg-inherit`}
                />
                
            </div>
            <button
    
                type="submit"
                  className={`self-start flex items-center justify-center h-10 w-40 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-bold`}
              >
              Submit
            </button>

        </form>
    </div>
  );
};

export default Contact;
