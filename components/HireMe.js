

export default function HireMe({ data }) {



    return (

        <section className="getintouch-section mb-10">

            <div className="wrapper  max-w-3xl m-auto rounded-xl px-7 py-10
                sm:p-10
                md:p-16 md:border-2 md:border-black">
                <h2 className="text-4xl text-center mb-3">Get In Touch</h2>
                <p className="text-center font-thin mb-8">If You want to get your business on another level, I am waiting for your message.</p>
                <form action="https://api.web3forms.com/submit" method="POST">

                    <input type="hidden" name="access_key" value="3b864da5-2c51-42e5-9fee-43f833ef11e1" />
                    <div className="wrapper max-w-96 m-auto flex flex-col justify-center items-center gap-y-4">
                        <input type="text" name="name" placeholder="Your Name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500" required />
                        <input type="email" name="email" placeholder="Your Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500" required />
                        <textarea name="message" placeholder="Your Message" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500" />
                        {/* <div class="h-captcha" data-captcha="true"></div> */}
  
                        <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-md focus:outline-none focus:ring focus:ring-red-500">
                            Elevate My Business
                        </button>
                    </div>


                </form>
                <script src="https://web3forms.com/client/script.js" async defer></script>

            </div>

        </section>
    )
}