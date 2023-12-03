import React from 'react'
import {Image, Link, Card, CardBody, CardFooter} from "@nextui-org/react";

export default function CardItem() {
  const list = [
    {
      title: "Airbnb Help Center",
      img: "/images/Airbnb.png",
      path:"/",
      link: "https://www.airbnb.com/help?audience=guest",
    },
    {
      title: "Hulu Help Center",
      img: "/images/Hulu.png",
      path:"/",
      link: "https://help.hulu.com/s/",
    },
    {
      title: "Salesforce Help Center",
      img: "/images/SFDC.png",
      path:"/",
      link: "https://help.salesforce.com/",
    },
    {
      title: "Sonos Help & Support",
      img: "/images/Sonos.png",
      path:"/",
      link: "https://support.sonos.com/en-us/home",
    },
    {
      title: "Figma Help Center",
      img: "/images/Figma.png",
      path:"/",
      link: "https://help.figma.com/hc/en-us",
    },
    {
      title: "Official Apple Support",
      img: "/images/Apple.png",
      path:"/",
      link: "https://support.apple.com/",
    },
  ];

  return (
    <div className=''>
      
    
    <div className='grid grid-cols-1 gap-[32px] md:grid-cols-2 lg:grid-cols-3'>
      {list.map((item, index) => (
        <Card  key={index}
        isHoverable isPressable className="">
              {/* <CardBody className="w-full py-2">
              
              </CardBody> */}
              <Image
                  removeWrapper
                  alt={item.title}
                  width="713"
                  className="p-2 w-full max-w-full object-cover object-top"
                  src={item.img}
                />
              <CardFooter className='flex justify-between'>
                  <Link isExternal href={item.path}>
              {item.title}
            </Link>
            <Link
              isExternal
              href={item.link}
              showAnchorIcon
            >
              
            </Link>
              </CardFooter>
          </Card>
      ))}
        
    </div>
    </div>
              
    

  );
}
