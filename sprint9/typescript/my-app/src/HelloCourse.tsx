import React from 'react' // rfce

interface HelloCourseProps {
  name: string;
}

function HelloCourse(props: HelloCourseProps) {
  return (
    <div>
      Hello {props.name}
    </div>
  )
}

export default HelloCourse;
