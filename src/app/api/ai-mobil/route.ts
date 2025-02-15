import { chatSession } from "@/lib/aimodel/gemini";
import { RekomendasiResponse } from "@/lib/interfaces/ai.mobil.interface";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const result = await chatSession.sendMessage(prompt);
    const responseText = result?.response?.text();

    if (!responseText) {
      return NextResponse.json(
        { error: "Gagal mendapatkan respons dari AI." },
        { status: 500 }
      );
    }

    try {
      const parsedResponse = JSON.parse(responseText) as RekomendasiResponse;

      if (
        !parsedResponse.rekomendasi ||
        !Array.isArray(parsedResponse.rekomendasi)
      ) {
        throw new Error("Format respons tidak valid");
      }

      return NextResponse.json(parsedResponse);
    } catch (parseError) {
      console.error("Parse error:", parseError);
      return NextResponse.json(
        { error: "Format respons tidak valid." },
        { status: 422 }
      );
    }
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan dalam mengambil rekomendasi." },
      { status: 500 }
    );
  }
}
