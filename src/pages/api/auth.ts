// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import "@/firebase/app";
import type { NextApiRequest, NextApiResponse } from "next";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

type Data = {
  token: string;
};

type Error = {
  msg: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  const auth = getAuth();
  const { email, password } = req.headers;

  // if (!email || !password) {
  //   res.json({ msg: "Error with password and email" });

  //   return;
  // }
  try {
    const resAuth = await signInWithEmailAndPassword(auth, email as string, password as string);

    if (resAuth) {
      const token = await resAuth.user.getIdToken();

      res.json({ token });
    }
  } catch (e) {
    res.status(500).json({ msg: new Error(e as string).message });
  }
}
