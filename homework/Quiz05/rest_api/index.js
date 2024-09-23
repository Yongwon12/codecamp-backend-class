import express from 'express'
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'

const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.get('/boards', (req, res) => {
  
  const result = [
    { number: 1, writer: "철수", title: "제목입니다", contents: "내용입니다" },
    { number: 2, writer: "영희", title: "좋은 날씨입니다", contents: "내용입니다" },
  ]

  res.send(result)
})

app.post('/tokens/phone', (req, res) => {
  const myphone = req.body.myphone

  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(myphone)
  if(isValid){
    // 2. 휴대폰 번호 자릿수가 맞다면 핸드폰 토큰 4자리 만들기
    const mytoken = getToken()

    // 3. 만든 토큰을 핸드폰번호에 토큰 전송하기
    sendTokenToSMS(myphone, mytoken)
    res.send("인증완료!!!")
  }
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})