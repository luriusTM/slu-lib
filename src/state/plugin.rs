use serde::{Deserialize, Serialize};

use super::{ResourceId, WidgetId};

#[derive(Debug, Clone, Hash, PartialEq, Eq, Serialize, Deserialize)]
pub struct PluginId(pub ResourceId);

impl From<ResourceId> for PluginId {
    fn from(value: ResourceId) -> Self {
        PluginId(value)
    }
}

impl std::fmt::Display for PluginId {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.0)
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Plugin {
    pub id: PluginId,
    #[serde(default = "Plugin::default_icon")]
    pub icon: String,
    pub target: WidgetId,
    pub plugin: serde_yaml::Value,
    #[serde(default)]
    pub bundled: bool,
}

impl Plugin {
    pub fn default_icon() -> String {
        "PiPuzzlePieceDuotone".to_string()
    }
}
