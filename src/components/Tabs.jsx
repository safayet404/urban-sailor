import { useState } from "react";

function Tabs() {
    const [activeTab, setActiveTab] = useState("details");

    const tabs = [
        { id: "details", label: "Product Details" },
        { id: "reviews", label: "Rating & Reviews" },
        { id: "faqs", label: "FAQs" },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "details":
                return (
                    <div className="grid grid-cols-2">
                        <div className="mt-4">
                            <h3 className="text-lg font-bold underline">Detailed Specification:</h3>

                            <ul className="mt-4 text-sm text-gray-600">
                                <p className="font-bold text-black">Material:</p>
                                <li className="pl-5">Organic Ringspun Cotton (100%)</li>
                                <li className="pl-5">Fabric Weight 5.16 oz/yd²</li>
                                <li className="pl-5">Regular fit, Crew Neck</li>
                            </ul>
                            <ul className="mt-4 text-sm text-gray-600">
                                <p className="font-bold text-black">Fabric Treatment:</p>
                                <li className="pl-5">Reactive dye, enzyme, and silicon washed</li>
                                <li className="pl-5">Preshrunk to minimize shrinkage</li>
                               
                            </ul>
                            <ul className="mt-4 text-sm text-gray-600">
                                <p className="font-bold text-black">Design::</p>
                                <li className="pl-5">All-fabric design panels; cut and sew construction</li>
                                <li className="pl-5">Typography and artworks use normal/high-density screen print</li>
                            </ul>
                        </div>
                        <div className="mt-4">

                            <table className="w-full mt-4 border border-gray-300 text-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 border">Size</th>
                                        <th className="px-4 py-2 border">Chest (Round)</th>
                                        <th className="px-4 py-2 border">Length</th>
                                        <th className="px-4 py-2 border">Sleeve</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { size: "M", chest: 39, length: 27.5, sleeve: 8.5 },
                                        { size: "L", chest: 40.5, length: 28, sleeve: 8.75 },
                                        { size: "XL", chest: 43, length: 29, sleeve: 9 },
                                        { size: "2XL", chest: 45, length: 30, sleeve: 9.25 },
                                    ].map((row) => (
                                        <tr key={row.size}>
                                            <td className="px-4 py-2 border">{row.size}</td>
                                            <td className="px-4 py-2 border">{row.chest}</td>
                                            <td className="px-4 py-2 border">{row.length}</td>
                                            <td className="px-4 py-2 border">{row.sleeve}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case "reviews":
                return (
                    <div>
                        <h3 className="text-xl font-bold mb-2">Rating & Reviews</h3>
                        <p className="text-gray-700">Customer reviews and ratings go here.</p>
                    </div>
                );
            case "faqs":
                return (
                    <div>
                        <h3 className="text-xl font-bold mb-2">FAQs</h3>
                        <p className="text-gray-700">Frequently Asked Questions about the product.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full">
            {/* Tab Navigation */}
            <div className="flex w-full border-b border-gray-300 mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 py-2 px-4 text-sm font-medium text-center ${activeTab === tab.id
                            ? "text-black border-b-2 border-black"
                            : "text-gray-500"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div>{renderContent()}</div>
        </div>

    );
}

export default Tabs;
