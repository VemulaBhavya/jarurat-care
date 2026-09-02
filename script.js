const form = document.querySelector('#support-request');
const formStatus = document.querySelector('#form-status');
const chatForm = document.querySelector('#chat-form');
const chatInput = document.querySelector('#chat-input');
const chatLog = document.querySelector('#chat-log');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name').trim().split(' ')[0] || 'there';
  formStatus.textContent = `Thanks, ${name}. Your request is ready for our care team to review.`;
  form.reset();
});

const answers = [
  { match: ['hello', 'hi', 'hii', 'hey', 'good morning', 'good afternoon'], answer: 'Hi there. I can tell you about the people we support, available services, volunteering, costs, or what happens after you contact us.' },
  { match: ['patient', 'patients', 'who do you help', 'who can come'], answer: 'We support patients and families who need practical help around healthcare, including finding local resources, getting to appointments, understanding care options, and finding caregiver or companionship support. We welcome people of all ages and backgrounds.' },
  { match: ['topic', 'topics', 'what can i ask', 'what do you know'], answer: 'You can ask about the patients we support, our services, volunteering, costs, or what happens after submitting a request. For example: “Who do you support?” or “How do I volunteer?”' },
  { match: ['help', 'support', 'offer'], answer: 'We can help with finding local resources, transport and appointment support, caregiver connections, and volunteer companionship.' },
  { match: ['volunteer', 'volunteering'], answer: 'Choose “Volunteer” in the form and tell us what you are good at. A coordinator will follow up with a short orientation and nearby opportunities.' },
  { match: ['next', 'happen', 'submit', 'after'], answer: 'A care coordinator reviews your request within 24 hours, then contacts you with a clear next step or a trusted local referral.' },
  { match: ['cost', 'price', 'free'], answer: 'Jarurat Care is free to contact. Some partner services may have their own costs, and we will explain those before connecting you.' }
];

function addMessage(text, type) {
  const message = document.createElement('div');
  message.className = `chat-message ${type}`;
  message.textContent = text;
  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function respond(question) {
  const words = question.toLowerCase();
  const found = answers.find((item) => item.match.some((word) => words.includes(word)));
  addMessage(found ? found.answer : 'I can help with support options, volunteering, costs, or what happens after you submit a request. Try one of those topics.', 'bot');
}

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const question = chatInput.value.trim();
  if (!question) return;
  addMessage(question, 'user');
  chatInput.value = '';
  window.setTimeout(() => respond(question), 300);
});

document.querySelectorAll('[data-question]').forEach((button) => {
  button.addEventListener('click', () => {
    const question = button.dataset.question;
    addMessage(question, 'user');
    window.setTimeout(() => respond(question), 300);
  });
});

document.querySelector('[data-open-chat]').addEventListener('click', () => {
  document.querySelector('#careguide').scrollIntoView({ behavior: 'smooth' });
  window.setTimeout(() => chatInput.focus(), 500);
});
