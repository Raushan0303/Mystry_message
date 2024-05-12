'use client'

import React from 'react';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const Page = () => {
  return (
    <div className="flex justify-center space-x-7"> {/* Center the content horizontally */}
      <div className="flex ">
        {/* Navbar */}
        <div className="w-1/4 p-4">
          <div className="mb-4">
            <div className="mb-2">Profile</div>
            <div>Settings</div>
          </div>
          {/* Other navbar items */}
        </div>
        {/* Posts */}
        <div className="w-3/4 border-r border-gray-300 overflow-y-auto"> {/* Make posts container scrollable */}
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Post Content */}
              <div className="mb-4">
                <div className="mb-2">
                  {/* Render your post content here */}
                </div>
                <div className="font-bold">Username</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum, justo eget vestibulum consequat, lorem justo tristique tortor.
                </div>
              </div>
              {/* Repeat for other posts */}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
