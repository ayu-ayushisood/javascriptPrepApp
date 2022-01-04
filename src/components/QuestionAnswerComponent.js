import * as React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import styles from '../stylesheet/style';

import DOMParser from 'react-native-html-parser'

const QuestionAnswerComponent = props => {
  const [activeSections, setActiveSections] = React.useState([]);

  const {questionsAndAnswers} = props;

  const renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.question}</Text>
      </View>
    );
  };
  const renderContent = section => {
    return (
      <View style={styles.content}>
        <Text>{section.answer}</Text>
      </View>
    );
  };

  const updateSections = activeSections => {
    setActiveSections(activeSections);
  };

  
  return (
    <ScrollView contentContainerStyle={{paddingTop: 30}}>
      <Accordion
        sections={questionsAndAnswers}
        activeSections={activeSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateSections}
        duration={400}
        expandMultiple={true}
      />
    </ScrollView>
  );
};

export default QuestionAnswerComponent;
