from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:3000")

        # Wait for the main title to appear
        page.wait_for_selector("text=Portx")

        # Take a screenshot
        page.screenshot(path="verification/home.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    run()
