import React from 'react'
import {StyleSheet, SectionList, Text, View} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  row: {padding: 20},
  header: {fontWeight: 'bold'},
})

const Row = props => (
  <View style={styles.row}>
    <Text>{props.val}</Text>
  </View>
)

const renderItem = ({item}) => <Row {...item} />

const renderSectionHeader = ({section}) => <Text style = {styles.header}>{section.title}</Text>

const SectionListView = props => {
	
  const viewByTitle = props.items.reduce((obj, item) => {
    const title = item.title
    return {
      ...obj,
      [title]: [...(obj[title] || []), item],
    }
  }, {})

  const sections = Object.keys(viewByTitle).sort().map(title => ({
    data: viewByTitle[title],
    title: title,
  }))

  return <SectionList sections={sections} renderItem={renderItem} renderSectionHeader={renderSectionHeader} />
}

SectionListView.propTypes = {
  items: PropTypes.array,
}

export default SectionListView