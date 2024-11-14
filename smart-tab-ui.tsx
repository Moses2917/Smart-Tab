import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Map, Book, Settings, ChevronRight } from 'lucide-react';

const SmartTabUI = () => {
  const [viewMode, setViewMode] = useState('groups');
  const [groups, setGroups] = useState([]);
  const [relationships, setRelationships] = useState([]);

  useEffect(() => {
    // Initialize and load data
    loadTabData();
  }, []);

  const loadTabData = async () => {
    // Load tab data from background script
    // Update state with groups and relationships
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-blue-500" />
            <h1 className="text-xl font-semibold">SmartTab</h1>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => setViewMode('groups')}
              className={`p-2 rounded ${viewMode === 'groups' ? 'bg-blue-50' : ''}`}
            >
              <Book className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode('map')}
              className={`p-2 rounded ${viewMode === 'map' ? 'bg-blue-50' : ''}`}
            >
              <Map className="w-4 h-4" />
            </button>
            <button className="p-2 rounded hover:bg-gray-100">
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {viewMode === 'groups' ? (
          <TabGroups groups={groups} />
        ) : (
          <RelationshipMap relationships={relationships} />
        )}

        <AIInsights />
      </CardContent>
    </Card>
  );
};

const TabGroups = ({ groups }) => {
  return (
    <div className="space-y-4">
      {groups.map(group => (
        <div key={group.id} className="border rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <h3 className="font-medium">{group.title}</h3>
          </div>
          
          <div className="space-y-2 ml-4">
            {group.tabs.map(tab => (
              <TabItem key={tab.id} tab={tab} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const TabItem = ({ tab }) => {
  const [showSummary, setShowSummary] = useState(false);
  
  return (
    <div className="border rounded p-2">
      <div className="flex items-center gap-2">
        <img src={tab.favicon} className="w-4 h-4" />
        <div className="flex-1 text-sm truncate">{tab.title}</div>
        <button 
          onClick={() => setShowSummary(!showSummary)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <ChevronRight className={`w-4 h-4 transform transition-transform ${
            showSummary ? 'rotate-90' : ''
          }`} />
        </button>
      </div>
      
      {showSummary && (
        <div className="mt-2 text-xs text-gray-600 border-t pt-2">
          {tab.summary}
        </div>
      )}
    </div>
  );
};

const RelationshipMap = ({ relationships }) => {
  // Implement relationship visualization
  return (
    <div className="h-96 border rounded-lg">
      {/* Add visualization library integration here */}
    </div>
  );
};

const AIInsights = () => {
  return (
    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
      <div className="text-sm font-medium mb-2">AI Insights</div>
      <div className="text-xs text-gray-600 space-y-1">
        <div>• 3 tabs form a learning sequence</div>
        <div>• 2 tabs contain redundant information</div>
        <div>• Suggested next topic: "Advanced Concepts"</div>
      </div>
    </div>
  );
};

export default SmartTabUI;