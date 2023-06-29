let mockURL = process.env.NEXT_PUBLIC_API_MOCKING;
let enableMock = process.env.NEXT_PUBLIC_ENABLE_MOCK_URL;
export let URL: any;

if (enableMock === "true") {
  URL = mockURL;
} else {
  URL = " https://milaanapi.think201.xyz";
}
