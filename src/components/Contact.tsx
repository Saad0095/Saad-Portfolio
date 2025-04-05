import { AnimatePresence, motion } from "motion/react"

const Contact = () => {
  return (
    <div id="contact">
      <motion.h1
        className="text-4xl font-bold text-theme-color text-center"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h1>
      <div className="py-20 px-4 flex flex-col md:flex-row justify-center items-center mx-auto md:w-10/12">
        <div className="w-full md:w-1/2 flex flex-col justify-center mb-8 md:mb-0">
          <input type="text" placeholder="Enter your Name" />
          <input type="text" placeholder="Enter your Email" />
          <input type="text" placeholder="Enter your Phone Number" />
          <select name="service-type" id="">
            <option value="Select Service Type">Select Service Type</option>
          </select>
          <input type="text" placeholder="Type your msg here...." />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center mb-8 md:mb-0">
          <h4>Phone</h4>
          <p>+92 317 0218290</p>
          <h4>Email</h4>
          <p>saadbinkhalid1895@gmail.com</p>
          <h4>LinkedIn</h4>
          <a href="https://www.linkedin.com/in/saad-bin-khalid-b077b8243/">Saad Bin Khalid</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
