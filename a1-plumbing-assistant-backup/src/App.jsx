import { useState, useRef, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Send, Droplets, DollarSign, Calendar, FileText } from 'lucide-react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! 👋 I'm Johnnie, your A-1 Plumbing Assistant. I can help with service questions, pricing, appointment scheduling, and plumbing tips. How can I assist you today?",
      sender: 'assistant',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user',
        timestamp: new Date()
      }
      setMessages([...messages, newMessage])
      setInputValue('')
      
      // Simulate assistant response
      setIsTyping(true)
      setTimeout(() => {
        const response = generateResponse(inputValue)
        const assistantMessage = {
          id: messages.length + 2,
          text: response,
          sender: 'assistant',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, assistantMessage])
        setIsTyping(false)
      }, 1500)
    }
  }

  const generateResponse = (userInput) => {
    const input = userInput.toLowerCase()
    
    // Slab leak questions (must come before general leak/emergency)
    if (input.includes('slab leak')) {
      return "Slab leaks occur when pipes under your foundation develop leaks. We specialize in slab leak detection and repair using advanced equipment. Signs include unexplained water bill increases or wet spots. Call 469-900-5194 for immediate assistance!"
    }
    
    // Water heater questions
    if (input.includes('water heater') || input.includes('tankless')) {
      return "We handle all water heater services including repair, replacement, and installation of both traditional and tankless units. Installation pricing: $2,500 for garage/downstairs, $2,700 for attic/upstairs. We work with quality brands like A.O. Smith. Call 469-900-5194 for more info!"
    }
    
    // Low water pressure
    if (input.includes('water pressure') || input.includes('low pressure')) {
      return "Low water pressure can be caused by mineral buildup, pipe problems, or pressure regulator issues. We can diagnose and fix these problems. Call 469-900-5194 to schedule an inspection!"
    }
    
    // Toilet issues
    if (input.includes('toilet') || input.includes('running') || input.includes('leaking toilet')) {
      return "For a toilet that keeps running or leaking, first turn off the water supply to the toilet, then call us at 469-900-5194. We handle all toilet repairs and installations professionally!"
    }
    
    // Drain issues
    if (input.includes('drain') || input.includes('clog') || input.includes('backup')) {
      return "We provide comprehensive drain cleaning and main line backup services. Whether it's a simple clog or major backup, we have the equipment and expertise to clear it. Call 469-900-5194 for drain services!"
    }
    
    // Pipe noises
    if (input.includes('noise') || input.includes('sound') || input.includes('pipes')) {
      return "Pipe noises can indicate water hammer, loose pipes, or other issues. We can diagnose and fix these problems to restore quiet operation. Call 469-900-5194 to schedule a diagnostic visit!"
    }
    
    // Emergency situations
    if (input.includes('emergency') || input.includes('urgent') || input.includes('leak')) {
      return (
        <div>
          <p><strong>🚨 Emergency Plumbing Steps:</strong></p>
          <p><strong>1.</strong> Turn off your main water valve</p>
          <p><strong>2.</strong> Call us immediately: <strong>469-900-5194</strong></p>
          <p><strong>3.</strong> We prioritize emergency calls during business hours</p>
          <p>Our Master Plumber Chris Crabtree has 30+ years of experience!</p>
        </div>
      )
    }
    // Quote requests (direct to form)
    if (input.includes('get a quote') || input.includes('quote') || input.includes('estimate')) {
      return (
        <span>
          Please visit our quote form to get started: <a href="https://johnniesue.github.io/a1-quote-form/" target="_blank" rel="noopener noreferrer" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>https://johnniesue.github.io/a1-quote-form/</a> - Fill out the details about your plumbing needs and we'll provide you with a detailed quote promptly!
        </span>
      )
    }
    
    // Pricing questions
    if (input.includes('ask about pricing') || input.includes('price') || input.includes('cost') || input.includes('rate') || input.includes('how much')) {
      return (
        <div>
          <p><strong>💰 Our Standard Service Rates:</strong></p>
          <p>• <strong>First 2 hours:</strong> $400 (2-hour minimum)<br/>
          • <strong>Additional hours:</strong> $200/hour after that</p>
          
          <p><strong>🔥 Water Heater Installation:</strong><br/>
          • Garage/downstairs: $2,500<br/>
          • Attic/upstairs: $2,700</p>
          
          <p><strong>💡 Additional Benefits:</strong><br/>
          • Free estimates for most jobs<br/>
          • 10% discounts for seniors and veterans</p>
          
          <p>📞 Call <a href="tel:469-900-5194" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>469-900-5194</a> for specific pricing!</p>
          
          <p>🌐 Visit our website: <a href="https://a-1apsvc.com/" target="_blank" rel="noopener noreferrer" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>a-1apsvc.com</a></p>
          
          <p>ℹ️ For more detailed information, visit our <a href="https://wlbcnsho.manus.space/" target="_blank" rel="noopener noreferrer" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>FAQ page</a></p>
        </div>
      )
    }
    
    // Scheduling questions
    if (input.includes('schedule') || input.includes('appointment') || input.includes('book')) {
      return (
        <div>
          <p><strong>📅 To schedule an appointment:</strong></p>
          <p>📞 <strong>Call us:</strong> <a href="tel:469-900-5194" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>469-900-5194</a></p>
          <p>📧 <strong>Email:</strong> <a href="mailto:johnniesue@a-1apsvc.com" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>johnniesue@a-1apsvc.com</a></p>
          <p>🌐 <strong>Online form:</strong> <a href="https://johnniesue.github.io/a1-quote-form/" target="_blank" rel="noopener noreferrer" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>Quote Form</a></p>
          
          <p>🌐 Visit our website: <a href="https://a-1apsvc.com/" target="_blank" rel="noopener noreferrer" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>a-1apsvc.com</a></p>
          
          <p>ℹ️ For more information, visit our <a href="https://wlbcnsho.manus.space/" target="_blank" rel="noopener noreferrer" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>FAQ page</a></p>
        </div>
      )
    }
    
    // Service area questions (must come before general service check)
    if (input.includes('service area') || input.includes('areas') || input.includes('where') || input.includes('location') || input.includes('serve')) {
      return (
        <div>
          <p><strong>Our Service Areas:</strong></p>
          <p>We proudly serve:</p>
          <p>• Lucas, TX (our home base)<br/>
          • Allen<br/>
          • McKinney<br/>
          • Plano<br/>
          • Frisco<br/>
          • Wylie<br/>
          • Fairview<br/>
          • Parker<br/>
          • Surrounding parts of Collin County</p>
          
          <p>📍 <strong>Not sure if we cover your area?</strong><br/>
          Give us a call at <a href="tel:469-900-5194" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>469-900-5194</a> - we're happy to help!</p>
          
          <p>🌐 Visit our website: <a href="https://a-1apsvc.com/" target="_blank" rel="noopener noreferrer" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>a-1apsvc.com</a></p>
          
          <p>ℹ️ For more information, visit our <a href="https://wlbcnsho.manus.space/" target="_blank" rel="noopener noreferrer" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>FAQ page</a></p>
        </div>
      )
    }
    
    // Services provided questions
    if (input.includes('services provided') || input.includes('what services') || input.includes('services offered') || input.includes('what do you do') || input.includes('list of services')) {
      return (
        <div>
          <p><strong>🔧 Our Complete Plumbing Services:</strong></p>
          
          <p><strong>🚰 Water Services:</strong><br/>
          • Water heater installation & repair<br/>
          • Tankless water heater installation<br/>
          • Water line repair & replacement<br/>
          • Water pressure issues<br/>
          • Shut-off valve replacement</p>
          
          <p><strong>🚽 Fixture Services:</strong><br/>
          • Toilet repair & installation<br/>
          • Faucet repair & installation<br/>
          • Fixture installations</p>
          
          <p><strong>🔍 Leak Services:</strong><br/>
          • Leak detection & repair<br/>
          • Slab leak detection & repair<br/>
          • Emergency leak response</p>
          
          <p><strong>🚿 Drain Services:</strong><br/>
          • Drain cleaning<br/>
          • Main line backup services<br/>
          • Sewer line repair</p>
          
          <p><strong>⚡ Additional Services:</strong><br/>
          • Gas line installation & repair<br/>
          • Pressure regulator replacement<br/>
          • Home plumbing inspections<br/>
          • Light commercial plumbing</p>
          
          <p>📞 Call <a href="tel:469-900-5194" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>469-900-5194</a> for any plumbing need!</p>
          
          <p>🌐 Visit our website: <a href="https://a-1apsvc.com/" target="_blank" rel="noopener noreferrer" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>a-1apsvc.com</a></p>
          
          <p>ℹ️ For more detailed information, visit our <a href="https://wlbcnsho.manus.space/" target="_blank" rel="noopener noreferrer" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>FAQ page</a></p>
        </div>
      )
    }

    // Service requests (general)
    if (input.includes('request a service') || (input.includes('service') && !input.includes('service area') && !input.includes('services provided') && !input.includes('what services'))) {
      return (
        <span>
          Just visit our quote form to get started: <a href="https://johnniesue.github.io/a1-quote-form/" target="_blank" rel="noopener noreferrer" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>https://johnniesue.github.io/a1-quote-form/</a> - Fill out the form, and we'll respond promptly with next steps.
        </span>
      )
    }
    
    // License and insurance
    if (input.includes('license') || input.includes('insured') || input.includes('background')) {
      return "Yes! We are fully licensed and insured. Chris Crabtree is a Master Plumber (License M-43801) with 30+ years of experience. Our team is background checked and drug tested for your safety and peace of mind."
    }
    
    // Warranty and guarantee
    if (input.includes('warranty') || input.includes('guarantee') || input.includes('insurance')) {
      return "Yes, we stand behind our work with quality guarantees and can work with home warranties and insurance companies on covered repairs. We believe in doing the job right the first time!"
    }
    
    // Maintenance tips
    if (input.includes('maintenance') || input.includes('prevent') || input.includes('tips')) {
      return "Key maintenance tips: Regular inspections, check for leaks, maintain water pressure, keep drains clear, winterize pipes in cold weather, and schedule professional inspections. Call 469-900-5194 to discuss maintenance plans!"
    }
    
    // Gas line services
    if (input.includes('gas line') || input.includes('gas')) {
      return "Yes, we provide gas line services including installation and repair. Gas line work requires special expertise and licensing, which our Master Plumber Chris Crabtree has. Call 469-900-5194 for gas line services!"
    }
    
    // General company info
    if (input.includes('company') || input.includes('about') || input.includes('who')) {
      return "A-1 Affordable Plumbing Services is a family-owned business based in Lucas, Texas. Founded by Master Plumber Chris Crabtree with 30+ years of experience, we serve residential and light commercial customers throughout Collin County. Call 469-900-5194!"
    }
    
    // Service area questions
    if (input.includes('service area') || input.includes('areas') || input.includes('where') || input.includes('location') || input.includes('serve')) {
      return (
        <div>
          <p><strong>Our Service Areas:</strong></p>
          <p>We proudly serve:</p>
          <p>• Lucas, TX (our home base)<br/>
          • Allen<br/>
          • McKinney<br/>
          • Plano<br/>
          • Frisco<br/>
          • Wylie<br/>
          • Fairview<br/>
          • Parker<br/>
          • Surrounding parts of Collin County</p>
          
          <p>📍 <strong>Not sure if we cover your area?</strong><br/>
          Give us a call at <strong>469-900-5194</strong> - we're happy to help!</p>
          
          <p>ℹ️ For more information, visit our <a href="https://wlbcnsho.manus.space/" target="_blank" rel="noopener noreferrer" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>FAQ page</a></p>
        </div>
      )
    }

    // General questions or FAQ requests
    if (input.includes('faq') || input.includes('more info') || input.includes('information') || input.includes('help') || input.includes('question')) {
      return (
        <div>
          <p><strong>Need more information?</strong></p>
          <p>📋 Visit our comprehensive <a href="https://wlbcnsho.manus.space/" target="_blank" rel="noopener noreferrer" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>FAQ page</a> for detailed answers about:</p>
          <p>• Services & pricing<br/>
          • Emergency procedures<br/>
          • Service areas<br/>
          • Company information<br/>
          • And much more!</p>
          
          <p>📞 Or call us directly: <strong>469-900-5194</strong></p>
        </div>
      )
    }

    // Default response
    return (
      <div>
        <p>Thanks for your question! For specific information about our services, pricing, or to schedule an appointment:</p>
        <p>📞 <strong>Call:</strong> <a href="tel:469-900-5194" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>469-900-5194</a></p>
        <p>📧 <strong>Email:</strong> <a href="mailto:johnniesue@a-1apsvc.com" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>johnniesue@a-1apsvc.com</a></p>
        <p>🌐 <strong>Website:</strong> <a href="https://a-1apsvc.com/" target="_blank" rel="noopener noreferrer" style={{color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold'}}>a-1apsvc.com</a></p>
        
        <p>Our team led by Master Plumber Chris Crabtree (30+ years experience) is ready to help with all your plumbing needs!</p>
      </div>
    )
  }

  const handleQuickAction = (action) => {
    if (action === 'quote') {
      // Open quote form directly in new tab
      window.open('https://johnniesue.github.io/a1-quote-form/', '_blank')
      return
    }
    
    let message = ''
    switch (action) {
      case 'services':
        message = 'What services do you provide?'
        break
      case 'pricing':
        message = 'Ask About Pricing'
        break
      case 'schedule':
        message = 'Schedule Appointment'
        break
    }
    
    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date()
    }
    setMessages([...messages, newMessage])
    
    // Simulate assistant response
    setIsTyping(true)
    setTimeout(() => {
      const response = generateResponse(message)
      const assistantMessage = {
        id: messages.length + 2,
        text: response,
        sender: 'assistant',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header">
        <div className="header-content">
          <div className="logo-container">
            <img src="/johnnie-logo.png" alt="Johnnie AI Assistant" className="eagle-logo" />
          </div>
          <h1 className="header-title">A-1 Plumbing Assistant</h1>
        </div>
      </div>

      {/* Messages Area */}
      <div className="messages-container">
        <div className="messages-scroll">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-bubble">
                {typeof message.text === 'string' ? (
                  <p>{message.text}</p>
                ) : (
                  <div>{message.text}</div>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message assistant">
              <div className="message-bubble">
                <div className="typing-indicator">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <Button
          onClick={() => handleQuickAction('quote')}
          className="quick-action-btn quote-btn"
        >
          <FileText className="btn-icon" />
          Get A Quote
        </Button>
        <Button
          onClick={() => handleQuickAction('services')}
          className="quick-action-btn services-btn"
        >
          <Droplets className="btn-icon" />
          Services
        </Button>
        <Button
          onClick={() => handleQuickAction('pricing')}
          className="quick-action-btn pricing-btn"
        >
          <DollarSign className="btn-icon" />
          Ask About Pricing
        </Button>
        <Button
          onClick={() => handleQuickAction('schedule')}
          className="quick-action-btn schedule-btn"
        >
          <Calendar className="btn-icon" />
          Schedule Appointment
        </Button>
      </div>

      {/* Input Area */}
      <div className="input-container">
        <div className="input-wrapper">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="message-input"
          />
          <Button 
            onClick={handleSend}
            className="send-btn"
            disabled={!inputValue.trim()}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App

