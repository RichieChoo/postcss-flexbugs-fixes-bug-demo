# postcss-flexbugs-fixes-bug-demo



## Reproduce bash

`npm install && npm run test`
## Compare

| language | Input                                             | Output                                      |
| -------- | ------------------------------------------------- | ------------------------------------------- |
| less     | @vm:10px;<br/>.test{<br/>&nbsp;&nbsp;&nbsp;&nbsp;flex: 0 1 21 * @vm<br/>} | @vm:10px;<br/>.test{<br/>&nbsp;&nbsp;&nbsp;&nbsp;flex: 0 1 21<br/>} |
| scss     | $vm:10px;<br/>.test{<br/>&nbsp;&nbsp;&nbsp;&nbsp;flex: 0 1 21 / $vm<br/>} | $vm:10px;<br/>.test{<br/>&nbsp;&nbsp;&nbsp;&nbsp;flex: 0 1 21<br/>} |
| sass     | $vm:10px;<br/>.test<br/>&nbsp;&nbsp;&nbsp;&nbsp;flex: 0 1 21 / $vm;       | $vm:10px<br/>.test<br/>&nbsp;&nbsp;&nbsp;&nbsp;flex: 0 1 21    |

