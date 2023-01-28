import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export const login = async (email: string, password: string) => {
  const auth = getAuth();

  try {
    const resAuth = await signInWithEmailAndPassword(auth, email, password);

    if (resAuth) {
      return await resAuth.user.getIdToken();
    }
  } catch (e) {
    console.log(e);
  }
};
