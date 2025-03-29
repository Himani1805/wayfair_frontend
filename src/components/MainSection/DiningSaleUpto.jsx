import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
  List
} from "@chakra-ui/react";
import React from "react";

export default function DiningSaleUpto() {
  return (
    <VStack>
      <Flex>
        <Flex flexDirection={"column"}>
          <Flex justifyContent={"space-evenly"}>
            <Heading width={'100%'} textAlign={"left"} fontWeight={"700"} marginLeft={"25px"} paddingBottom={"15px"}>Dining Sale: up to 50% OFF</Heading>
            <List.Root listStyleType={"none"} width={"5%"}>
              <List.Item>
                <Link href="myOrders" textDecoration={"underline"} color={"#7c189f"} _hover={{ textDecoration: "none", textDecorationColor: "purple.500" }} >See all</Link>
              </List.Item>
            </List.Root>
          </Flex>
          <Flex>
            <Box>
              <Image src="https://assets.wfcdn.com/im/48655380/resize-h400-w400%5Ecompr-r85/1222/122209959/Cache+2-Door+Accent+Cabinet.jpg" />
              <Link href="wayfairRewards">Cache 2-Door Accent Cabinet</Link>
              <Heading>$139.83</Heading>
              <Text>$425.00</Text>
            </Box>
            <Box>
              <Image src="https://assets.wfcdn.com/im/99827312/resize-h400-w400%5Ecompr-r85/2732/27326133/Emma+Lou+Solid+Wood+Accent+Chest.jpg" />
              <Link href="wayfairRewards">
                Artificial Mixed Peony and Hydrangea Bush
              </Link>
              <Heading>$12.99</Heading>
              <Text>was$40.43</Text>
            </Box>
            <Box>
              <Image src="https://assets.wfcdn.com/im/47074464/resize-h400-w400%5Ecompr-r85/3516/35163517/Warm+Solid+Wood+Accent+Cabinet.jpg" />
              <Link href="wayfairRewards">Cherry Blossom Arrangement</Link>
              <Heading>$21.99</Heading>
              <Text>$3.14 per item was$23.99</Text>
            </Box>
            <Box>
              <Image src="https://assets.wfcdn.com/im/40230321/resize-h400-w400%5Ecompr-r85/3094/309422000/Eldrin+Almond+Wood+Sofa%2F+Media+Console+Table.jpg" />
              <Link href="wayfairRewards">
                Alani 20" Artificial Peony Bunch
              </Link>
              <Heading>$39.00</Heading>
              <Text>$13.00 per item was$64.92</Text>
            </Box>

            <Box>
              <Image src="https://assets.wfcdn.com/im/65235432/resize-h400-w400%5Ecompr-r85/2886/288676860/Norvun+39.4%27%27+Console+Table.jpg" />
              <Link href="wayfairRewards">Poppy Arrangements</Link>
              <Heading>$13.99</Heading>
            </Box>
            <Box>
              <Image src="https://assets.wfcdn.com/im/90788973/resize-h400-w400%5Ecompr-r85/5699/56997217/PETMAKER+Cat+House+%E2%80%93+Collapsible+Multipurpose+Small+Dog+or+Cat+Ottoman+with+Footrest%2C+Cushioned+Top%2C+and+Interior+Pillow.jpg" />
              <Link href="wayfairRewards">
                Cauldwell 26" Artificial Calla Lily Stem
              </Link>
              <Heading>$39.98</Heading>
              <Text>$19.99 per item was$62.10</Text>
            </Box>
            <Box>
              <Image src="https://assets.wfcdn.com/im/07593473/resize-h400-w400%5Ecompr-r85/2766/276641091/Adaiya+25.9%27%27+Console+Table.jpg" />
              <Link href="wayfairRewards">
                {" "}
                Ultra Realistic Faux Silk Hydrangea Arrangement - for Home Decor
              </Link>
              <Heading>$34.99</Heading>
              <Text>$17.50 per item was$75.99</Text>
            </Box>
            <Box>
              <Image src="https://assets.wfcdn.com/im/22855724/resize-h400-w400%5Ecompr-r85/2880/288079946/Bruce+Cabinet.jpg" />
              <Link href="wayfairRewards">Mixed Assortment Arrangement</Link>
              <Heading>$21.99</Heading>
            </Box>
            <Box>
              <Image src="https://assets.wfcdn.com/im/77520777/resize-h400-w400%5Ecompr-r85/1075/107559331/Accent+Chest.jpg" />
              <Link href="wayfairRewards">
                40" Artificial Cherry Blossom Spray
              </Link>
              <Heading>$27.99</Heading>
              <Text>$9.33 per item was$45.45</Text>
            </Box>
            <Box>
              <Image src="https://assets.wfcdn.com/im/26609663/resize-h400-w400%5Ecompr-r85/2703/270349687/Ryon+Upholstered+Ottoman.jpg" />
              <Link href="wayfairRewards">Silk Dahlia Arrangement in Vase</Link>
              <Heading>$41.99</Heading>
              <Text>was$59.99</Text>
            </Box>
          </Flex>
        </Flex>

      </Flex>
    </VStack>
  )
}
