import React from 'react'
import {TouchableOpacity, StyleSheet, View, SectionList, Text} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  row: {padding: 20},
})

const Row = props => (
  <TouchableOpacity style={styles.row} onPress={() => props.onSelectDetail(props)}>
    <Text>Title: {props.title}</Text>
    <Text>Year: {props.year}</Text>
  </TouchableOpacity>
)

const renderSectionHeader = ({section}) => <Text>{section.type}</Text>

const SectionListContacts = props => {
  const moviesByType = props.movies.reduce((obj, entry) => {
    const type = entry.type
    return {
      ...obj,
      [type]: [...(obj[type] || []), entry],
    }
  }, {})

  const sections = Object.keys(moviesByType)
    .sort()
    .map(type => ({
      data: moviesByType[type],
      type: type,
    }))

  return (
    <SectionList
      keyExtractor={item => item.title}
      sections={sections}
      renderItem={({item}) => <Row {...item} onSelectDetail={props.onSelectDetail} />}
      renderSectionHeader={renderSectionHeader}
    />
  )
}

SectionListContacts.propTypes = {
  contacts: PropTypes.array,
}

export default SectionListContacts