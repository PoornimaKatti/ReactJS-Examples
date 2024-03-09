 /*
 Unicode is an encoding standard for all characters in the universe. 
 Every language code and symbol in this world is assigned by Unicode. 
 There is no encoding standard that supports all languages,
  By using the Unicode standard, we can retrieve and combine data with all language ->(2192)
 */
import React from "react";
import Float from './components/Float'
const App = ({ unicode }) => {
    return (
        <h1>
            This is a Right arrow
            {String.fromCodePoint(parseInt(unicode, 16))}
            <Float />
        </h1>
    );
};
export default App;