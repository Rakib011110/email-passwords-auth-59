/**
 * 1. authentication 
 * 2. authorization 
 * 3. sign in === login 
 * 4. sign up === register
 * 
 *  
 * 
 * 
 * .catch() মেথডটি ব্যবহার করা হয় যদি  আমরা কোন কারণে লগইন সম্পন্ন করতে না পারি ,এমন কোন Error হয়।  signInWithEmailAndPassword() ফাংশনের ক্ষেত্রে এমন Errorহতে পারে, যেমন ভুল ইমেইল বা পাসওয়ার্ড, নেটওয়ার্ক Errorবা অন্য কোন Error।

error এর কারণে লগইন  সম্পন্ন না করলে Error হ্যান্ডল করে ব্যবহারকারীকে Error সম্পর্কিত সতর্কতা প্রদান করতে হবে। তাই যদি কোন Error হয়, তখন .catch() মেথডটি ব্যবহার করে Errorক্যাচ করে এবং প্রয়োজনীয় Error হ্যান্ডলিং করে, যেমন user কে Error massage দেখানো।
 * */ 