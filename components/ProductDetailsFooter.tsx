"use client"
import {
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
} from "lucide-react";


export default function ProductDetailsFooter(){
    return(
        <div className="w-full flex flex-col justify-center items-center">
          <footer className="mt-12 border-t pt-8 w-10/12 flex flex-col justify-center items-center">
            <div className="md:flex justify-between items-center w-full">
              <div className='flex gap-5 md:gap-16 pb-7'>
                <div className="space-y-4">
                  <h3 className="md:font-medium">CONTACT</h3>
                </div>
                <div className="space-y-4">
                  <h3 className="md:font-medium">TERMS OF SERVICES</h3>
                </div>
                <div className="space-y-4">
                  <h3 className="md:font-medium">SHIPPING AND RETURNS</h3>
                  
                </div>
              </div>
              {/* Newsletter */}
              <div className="flex w-1/4">
                <input
                  type="email"
                  placeholder="Give an email, get the newsletter."
                  className="flex-1 border-b-2 border-orange-500 focus:outline-none py-2 pr-5"
                  />
                <button className="border-b-2 border-orange-500">
                  <ArrowRight className="text-gray-400 hover:text-pink-500" />
                </button>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="mt-8 flex justify-between w-full items-center text-sm text-gray-600">
              <div className="flex gap-4">
                <a href="#" className="hover:text-pink-500">
                  Terms of use
                </a>
                <a href="#" className="hover:text-pink-500">
                  Privacy policy
                </a>
              </div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-pink-500">
                  <Facebook size={16} />
                </a>
                <a href="#" className="hover:text-pink-500">
                  <Instagram size={16} />
                </a>
                <a href="#" className="hover:text-pink-500">
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </footer>
        </div>
    )
}