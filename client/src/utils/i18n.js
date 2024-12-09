import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          yourNotes: "Your Notes",
          welcomeMessage:
            "Welcome to Your Notes - Your personal space to organize thoughts, tasks, and everything in between. Whether you are planning your next project, jotting down ideas, or keeping track of daily tasks, we have got you covered.",
          register: "Register",
          login: "Login",
          signup: "Signup",
          emailLabel: "Email",
          passwordLabel: "Password",
          confirmPasswordLabel: "Confirm Password",
          completeSignupText: "Complete signup",
          alreadyHaveAccount: "Already have an account?",
          submitting: "Submitting...",
          dontHaveAccount: "Don't have an account?",
          logoutSuccessMessage: "Logged Out Successfully",
          hiText: "Hi",
          modifyText: "Modify User Info",
          logoutText: "Logout",
          emptyNoteError: "Please Enter a note before submitting",
          createTodoSuccessMessage: "Note added successfully",
          createTodoPlaceholder: "Create a new todo . . .",
          activeNote: "Note marked as Active successfully",
          completedNote: "Note marked as Completed successfully",
          deleteSuccessMessage: "Note deleted successfully",
          noCompleteMessage: "No completed todos found",
          clearTodoSucessMessage: "All completed todos cleared successfully",
          clearTodoErrorMessage: "Failed to clear completed todos.",
          itemsLeft: "items left",
          all: "All",
          active: "Active",
          completed: "Completed",
          clearCompleted: " Clear Completed",
          phoneLabel: "Phone",
          birthdayYearLabel: "Birthday Year",
          usernameLabel: "Username",
          saveModifyUser: "Save Changes",
          savingModifyUser: "Saving Changes... ",
          completeSignup: "Complete Signup",
          back: "Back",
          registrationSucessMessage: "Registration Complete",
        },
      },
      am: {
        translation: {
          // bobsruwbrbiwi
          yourNotes: "የዕርስዎ ማስታወሻ",
          welcomeMessage:
            "ወደ ማስታወሻዎ እንኳን በደህና መጡ - ሀሳቦችን ለማደራጀት የእርስዎ የግል ቦታ ፣ ተግባራት, እና በመካከላቸው ያለው ነገር ሁሉ. እቅድዎን እያቀዱ እንደሆነ የሚቀጥለው ፕሮጀክት ፣ ሀሳቦችን መፃፍ ፣ ወይም የዕለት ተዕለት ተግባራትን መከታተል ፣ ሽፋን አግኝተናል።",
          register: "ይመዝገቡ",
          login: "ይግቡ",
          signup: "ይመዝገቡ",
          emailLabel: "ኢሜይል",
          passwordLabel: "የይለፍ ቃል",
          confirmPasswordLabel: "የይለፍ ቃል ማረጋግጫ",
          completeSignupText: "ይቀጥሉ",
          alreadyHaveAccount: "ኪዚሀ ቀደም መለያ ነበርዎት?",
          submitting: "በሂደት ላይ...",
          dontHaveAccount: "መለያ የለዎትም?",
          logoutFailMessage: "በተሳካ ሁኔታ ወጥዋል።",
          hiText: "ሰላም",
          modifyText: "መረጃዎን ይቀይሩ",
          logoutText: "ይውጡ",
          emptyNoteError: "መጀመርያ ማስታውሻ ያስገቡ",
          createTodoSuccessMessage: "ማስታወሻዎ በተሳካ ሁኔታ ተመዝግቦአል",
          createTodoPlaceholder: "አዲስ ማስታወሻ ያስገቡ . . .",
          activeNote: "ማስታወሻ በተሳካ ሁኔታ ንቁ ተብሎ ምልክት ተደርጎበታል",
          completedNote: "ማስታወሻ በተሳካ ሁኔታ እንደተጠናቀቀ ምልክት ተደርጎበታል",
          deleteSuccessMessage: "ማስታወሻዎ በተሳካ ሁኔታ ተሰርዟል።",
          noCompleteMessage: "ምንም የተጠናቀቁ ማስታወሻዎቸ አልተገኙም።",
          clearTodoSucessMessage: "ሁሉም የተጠናቀቁ ማስታወሻዎቸ በተሳካ ሁኔታ ተሰርዘዋል።",
          clearTodoErrorMessage: "የተጠናቀቁ ማስታወሻዎቸን መሰረዝ አልተቻለም",
          itemsLeft: "ቀርተዋል",
          all: "ሁሉም",
          active: "ያልተጠናቀቁ",
          completed: "የተጠናቀቁ",
          clearCompleted: "የተጠናቀቁትን ይሰርዙ",
          phoneLabel: "ስልክ ቁጥር",
          birthdayYearLabel: "የልደት ዓ.ም",
          usernameLabel: "መለያ ስም",
          saveModifyUser: "ይመዝግቡ",
          savingModifyUser: "በመመዝገብ ላይ...",
          completeSignup: "ምዝገባዎን ያጠናቁ",
          back: "ተመለስ",
          registrationSucessMessage: "ምዝገባ ተጠናቋል",
        },
      },
    },
  });

export default i18n;
