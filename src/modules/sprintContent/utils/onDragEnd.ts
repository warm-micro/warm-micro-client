import React from 'react';

export const Reorder = (list: any, startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const onDragEnd = (result: any) => {
  // if (!result.destination) {
  //   //console.log("no-change");
  //   return;
  // }
  // if (result.type === 'QUESTIONS') {
  //   console.log(result);
  //   const questions = Reorder(
  //     this.state.questions,
  //     result.source.index,
  //     result.destination.index
  //   );
  //   this.setState({
  //     questions,
  //   });
  // } else {
  //   const answers = Reorder(
  //     this.state.questions[parseInt(result.type, 10)].answers,
  //     result.source.index,
  //     result.destination.index
  //   );
  //   const questions = JSON.parse(JSON.stringify(this.state.questions));
  //   questions[result.type].answers = answers;
  //   this.setState({
  //     questions,
  //   });
  // }
};
