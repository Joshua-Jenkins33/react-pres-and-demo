import React from "react"
import { Heading, Text, Quote, List, ListItem, Slide } from "spectacle"

export const WhatIsReact = () => (
    <Slide >
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What is React?
        </Heading>
        <List>
            <ListItem>Front-end UI library</ListItem>
            <ListItem>Open source</ListItem>
            <ListItem>Maintained/developed by facebook</ListItem>
        </List>
    </Slide>
)
