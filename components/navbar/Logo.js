import React from "react"
import { Box, Text } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text color={'black'} fontSize="3xl">
        🇨🇭 SWISS<strong>DAO</strong> 🏔
      </Text>
    </Box>
  )
}