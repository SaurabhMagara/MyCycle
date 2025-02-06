import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordianQuestions() {
    return (
        <div className="w-11/12 lg:w-7/12 h-screen flex flex-col items-center py-10">
            <div className="flex justify-center items-center">
                <h2 className="w-auto text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl z-50 py-5 md:pb-20 px-5">
                    Frequently asked questions?
                </h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4 h-full">
                <AccordionItem value="item-1" >
                    <AccordionTrigger className="bg-[#FFF7F3] px-2 text-xl">1. What is menstrual cup?</AccordionTrigger>
                    <AccordionContent className="">
                        A menstrual cup is a reusable, bell-shaped device made of medical-grade silicone, rubber, or elastomer.
                        It is inserted into the vagina during menstruation to collect menstrual fluid.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="bg-[#FFF7F3] px-2 text-xl">2. How do I use a menstrual cup?</AccordionTrigger>
                    <AccordionContent>
                        A menstrual cup is a reusable, bell-shaped device made of medical-grade silicone, rubber, or elastomer.
                        It is inserted into the vagina during menstruation to collect menstrual fluid.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="bg-[#FFF7F3] px-2 text-xl">3. How long can I wear a menstrual cup? </AccordionTrigger>
                    <AccordionContent>
                        A menstrual cup is a reusable, bell-shaped device made of medical-grade silicone, rubber, or elastomer.
                        It is inserted into the vagina during menstruation to collect menstrual fluid.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="bg-[#FFF7F3] px-2 text-xl">4. How do I clean my menstrual cup?</AccordionTrigger>
                    <AccordionContent>
                        A menstrual cup is a reusable, bell-shaped device made of medical-grade silicone, rubber, or elastomer.
                        It is inserted into the vagina during menstruation to collect menstrual fluid.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="bg-[#FFF7F3] px-2 text-xl">5. Can I use a menstrual cup if I have an IUD?</AccordionTrigger>
                    <AccordionContent>
                        A menstrual cup is a reusable, bell-shaped device made of medical-grade silicone, rubber, or elastomer.
                        It is inserted into the vagina during menstruation to collect menstrual fluid.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger className="bg-[#FFF7F3] px-2 text-xl">6. How do I know what size to choose?</AccordionTrigger>
                    <AccordionContent>
                        A menstrual cup is a reusable, bell-shaped device made of medical-grade silicone, rubber, or elastomer.
                        It is inserted into the vagina during menstruation to collect menstrual fluid.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
