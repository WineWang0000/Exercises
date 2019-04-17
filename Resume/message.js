!function(){
	var view = document.querySelector('section.message')
	var controller = {
		view: null,
		messageList: null,
    init: function(view){
			this.view = view
			this.messageList = view.querySelector('#messageList')
			this.form = view.querySelector('form')
			this.initAV()
			this.loadMessage()
			this.bindEvents()
		},
		initAV: function(){
			var APP_ID = 'zgQnBIVk7k5r3GB6DSYrtpYl-gzGzoHsz';
			var APP_KEY = 'R32UdRtOO3sKpBVJGGkmkgLP';
			AV.init({appId: APP_ID, appKey: APP_KEY})
		},
		loadMessage: function(){
			var query = new AV.Query('Message');
			query.find().then((messages)=>{
				let array = messages.map((item)=> item.attributes)
				array.forEach((item)=>{
					let li = document.createElement('li')
					li.innerText = `${item.name} : ${item.content}`
					let messageList = document.querySelector('#messageList')
					messageList.appendChild(li)
				})
			})
		},
		bindEvents: function(){
			let myForm = this.form
      this.form.addEventListener('submit', function(e){
			e.preventDefault()
			let content = myForm.querySelector('input[name=content]').value
			let name = myForm.querySelector('input[name=name]').value
			var Message = AV.Object.extend('Message')
			var message = new Message()
			message.save({
				name: name,
				content: content          
			}).then((object)=> {
				console.log(object)
				let li = document.createElement('li')
				li.innerText = `${object.attributes.name} : ${object.attributes.content}`
				let messageList = document.querySelector('#messageList')
				messageList.appendChild(li)
				myForm.querySelector('input[name=content]').value = ''
				myForm.querySelector('input[name=name]').value = ''
			})
      })
		},
		x: function(){
			
		}
	}
	controller.init(view)
}.call()













console.log('目前都没有错')







/*
var TestObject = AV.Object.extend('TestObject'); //创建TestObject表
var testObject = new TestObject(); //在表中创建一行数据
testObject.save({
  words: 'Hello World!'            //数据内容是"Hello World"，然后保存
}).then(function(object) {
  alert('LeanCloud Rocks!');       //成功则运行alert
})
*/