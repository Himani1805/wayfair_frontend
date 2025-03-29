import React from 'react'

import ExploreOurExclusiveBrands from './ExploreOurExclusiveBrands'
import KeepShoppingForFauxFlorals from './KeepShoppingForFauxFlorals'
import SmallSpaceEntryWayFinds from './SmallSpaceEntryWayFinds'
import EntrywayEssentials from './EntrywayEssentials'
import ShopTheLook from './ShopTheLook'
import EasterPrepDone from './EasterPrepDone'
import UnwindWithoutOverspending from './UnwindWithoutOverspending'
import KeepShoppingForBathTowels from './KeepShoppingForBathTowels'
import HoursOnlyDealsOfTheDay from './HoursOnlyDealsOfTheDay'
import RecommendedForYou from './RecommendedForYou'
import DiningSaleUpto from './DiningSaleUpto'
import AllCategories from './AllCategories'
import { Flex } from '@chakra-ui/react'
import ShopByDepartment from './ShopByDepartment'

export default function MainSection() {
  return (
    <Flex width={"92%"} border={"2px solid red"} mx={"auto"} flexDirection={"column"}>
      <AllCategories/>
      <DiningSaleUpto/>
      <RecommendedForYou/>
      <HoursOnlyDealsOfTheDay/>
      <KeepShoppingForBathTowels/>
      <UnwindWithoutOverspending/>
      <EasterPrepDone/>
      <ShopTheLook/>
      <EntrywayEssentials/>
      <SmallSpaceEntryWayFinds/>
      <KeepShoppingForFauxFlorals/>
      <ExploreOurExclusiveBrands/>
      <ShopByDepartment/>
    </Flex>
  )
}
