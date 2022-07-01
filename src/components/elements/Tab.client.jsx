import React from "react";
import {Tab} from "@headlessui/react";
export default function ProductDetailTab() {
    return (
        <>
            <Tab.Group>
                <Tab.List className='w-full flex flex-row'>
                    <Tab>
                        <div className='w-1/3'>Description</div>
                    </Tab>
                    <Tab>
                        <div className='w-1/3'>Shipping & Refund</div>
                    </Tab>
                    <Tab>
                        <div className='w-1/3'>Store Reviews</div>
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>Content 1</Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </>
    )
}