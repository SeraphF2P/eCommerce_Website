import React from "react";
import { Link } from "react-router-dom";
import Btn from "../../components/Btn";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiOutlineTwitter,
} from "react-icons/ai";
export default () => {
    return (
        <div className="bg-gray-700/90 prose-a:text-gray-300 prose-a:transition-colors prose-a:duration-300 hover:prose-a:text-teal-400">
            <div className="mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                <div className="row-gap-10 mb-8 grid lg:grid-cols-6">
                    <div className="row-gap-8 grid grid-cols-2 gap-5 md:grid-cols-4 lg:col-span-4">
                        <div>
                            <h3 className="font-medium tracking-wide ml-0 ">
                                Category
                            </h3>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link to="/">News</Link>
                                </li>
                                <li>
                                    <Link to="/">World</Link>
                                </li>
                                <li>
                                    <Link to="/">Games</Link>
                                </li>
                                <li>
                                    <Link to="/">References</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium tracking-wide ml-0 ">Apples</h3>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link to="/">Web</Link>
                                </li>
                                <li>
                                    <Link to="/">eCommerce</Link>
                                </li>
                                <li>
                                    <Link to="/">Business</Link>
                                </li>
                                <li>
                                    <Link to="/">Entertainment</Link>
                                </li>
                                <li>
                                    <Link to="/">Portfolio</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium tracking-wide ml-0 ">Cherry</h3>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link to="/">Media</Link>
                                </li>
                                <li>
                                    <Link to="/">Brochure</Link>
                                </li>
                                <li>
                                    <Link to="/">Nonprofit</Link>
                                </li>
                                <li>
                                    <Link to="/">Educational</Link>
                                </li>
                                <li>
                                    <Link to="/">Projects</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium tracking-wide ml-0 ">
                                Business
                            </h3>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link to="/">Infopreneur</Link>
                                </li>
                                <li>
                                    <Link to="/">Personal</Link>
                                </li>
                                <li>
                                    <Link to="/">Wiki</Link>
                                </li>
                                <li>
                                    <Link to="/">Forum</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:max-w-md lg:col-span-2">
                        <form className="mt-4 flex flex-col md:flex-row">
                            <input
                                placeholder="Email"
                                required
                                type="text"
                                className="  mb-3 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm transition duration-200 focus:outline-transparent md:mr-2 md:mb-0"
                            />
                            <Btn
                                type="submit"
                                shape="filled"
                                className="   inline-flex h-12 items-center justify-center rounded px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-transparent"
                            >
                                Subscribe
                            </Btn>
                        </form>
                        <h3 className="mt-4 text-sm ">
                            Bacon ipsum dolor amet short ribs pig sausage
                            prosciuto chicken spare ribs salami.
                        </h3>
                    </div>
                </div>
                <div className="flex flex-col justify-between  pt-5 pb-10 sm:flex-row">
                    <h3 className="text-sm ">
                        © Copyright 2020 Lorem Inc. All rights reserved.
                    </h3>
                    <div className="mt-4 flex items-center space-x-4 sm:mt-0">
                        <Link to="/" aria-label="link to Twitter">
                            <AiOutlineTwitter size={24} />
                        </Link>
                        <Link to="/" aria-label="link to Instagram">
                            <AiFillInstagram size={24} />
                        </Link>
                        <Link to="/" aria-label="link to Facebook">
                            <AiFillFacebook size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
