import { Content } from "./Content";
import { Header } from "./Header";
import { Section } from "./Section";

export function Layout() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <Section className="bg-orange-400" >
                <Header />
            </Section>

            {/* Main */}
            <Section className="flex-1">
                <Content />
            </Section>

            {/* Footer */}
        </div>
    )
}